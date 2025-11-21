// orderTracking.js - Complete Working Version

document.addEventListener('DOMContentLoaded', function() {
    console.log('📦 Initializing Warezo Order Tracking...');
    initializeOrderTrackingSystem();
});

function initializeOrderTrackingSystem() {
    try {
        // Initialize core systems
        initOrderNumberingSystem();
        initOrderManagement();
        initEnhancedNavigation();
        initInteractiveProgressTracker();
        initRealTimeOrderUpdates();
        initSmartInventorySystem();
        initSupportSystem();
        addControlButtons(); // ✅ هذا أهم حاجة
        
        console.log('✅ Order Tracking System Ready!');
    } catch (error) {
        console.error('❌ System initialization failed:', error);
    }
}

// ✅ 1. نظام الترقيم وإدارة الطلبات
function initOrderNumberingSystem() {
    let orderSystem = JSON.parse(localStorage.getItem('warezo_order_system') || 'null');
    
    if (!orderSystem) {
        orderSystem = {
            lastOrderNumber: 1000,
            orderPrefix: 'WRZ',
            totalOrders: 0,
            currentOrder: null
        };
        localStorage.setItem('warezo_order_system', JSON.stringify(orderSystem));
    }
    
    return orderSystem;
}

function initOrderManagement() {
    let orders = JSON.parse(localStorage.getItem('warezo_orders') || 'null');
    
    if (!orders || orders.length === 0) {
        orders = [createNewOrder()];
        localStorage.setItem('warezo_orders', JSON.stringify(orders));
    }
    
    // عرض الطلب الحالي
    displayCurrentOrder(orders[orders.length - 1]);
    return orders;
}

function createNewOrder() {
    const orderSystem = JSON.parse(localStorage.getItem('warezo_order_system'));
    orderSystem.lastOrderNumber++;
    orderSystem.totalOrders++;
    
    const newOrderNumber = `${orderSystem.orderPrefix}${orderSystem.lastOrderNumber}`;
    
    const newOrder = {
        id: newOrderNumber,
        number: newOrderNumber,
        customer: "Retailer Solutions LLC",
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        status: "Processing",
        totalAmount: (Math.floor(Math.random() * 20000) + 5000) + " EGP",
        trackingNumber: newOrderNumber,
        carrier: "Warezo Logistics",
        estimatedDelivery: getEstimatedDeliveryDate(),
        createdAt: new Date().toISOString()
    };
    
    orderSystem.currentOrder = newOrder.id;
    localStorage.setItem('warezo_order_system', JSON.stringify(orderSystem));
    
    console.log('🆕 Created new order:', newOrderNumber);
    return newOrder;
}

function getEstimatedDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long', 
        day: 'numeric' 
    }) + ', by 5:00 PM';
}

function displayCurrentOrder(order) {
    if (!order) return;
    
    // تحديث واجهة المستخدم
    document.querySelector('.order-number').textContent = `Order ${order.number}`;
    document.querySelector('.status-badge').textContent = order.status;
    document.querySelectorAll('.detail-value')[1].textContent = order.customer;
    document.querySelectorAll('.detail-value')[2].textContent = order.date;
    document.querySelectorAll('.detail-value')[3].textContent = order.totalAmount;
    
    // تحديث معلومات التوصيل
    const infoItems = document.querySelectorAll('.info-value');
    infoItems[0].textContent = order.trackingNumber;
    infoItems[2].textContent = order.estimatedDelivery.toLowerCase();
}

// ✅ 2. إضافة أزرار التحكم (هذا أهم جزء)
function addControlButtons() {
    const orderHeader = document.querySelector('.order-header');
    
    // تأكد من وجود العنصر
    if (!orderHeader) {
        console.error('❌ Order header not found!');
        return;
    }
    
    // إنشاء زر التحديث
    const refreshBtn = document.createElement('button');
    refreshBtn.id = 'refreshOrderBtn';
    refreshBtn.className = 'btn btn-outline-primary btn-sm me-2';
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt me-1"></i> Refresh Status';
    
    // إنشاء زر طلب جديد
    const newOrderBtn = document.createElement('button');
    newOrderBtn.id = 'newOrderBtn';
    newOrderBtn.className = 'btn btn-success btn-sm';
    newOrderBtn.innerHTML = '<i class="fas fa-plus me-1"></i> New Order';
    
    // إنشاء حاوية للأزرار
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'order-actions';
    buttonContainer.style.marginTop = '1rem';
    buttonContainer.appendChild(refreshBtn);
    buttonContainer.appendChild(newOrderBtn);
    
    // إضافة الأزرار للصفحة
    orderHeader.appendChild(buttonContainer);
    
    // ✅ إضافة event listeners
    refreshBtn.addEventListener('click', handleRefreshOrder);
    newOrderBtn.addEventListener('click', handleNewOrder);
    
    console.log('✅ Control buttons added successfully');
}

// ✅ 3. معالجة أحداث الأزرار
function handleRefreshOrder() {
    const btn = document.getElementById('refreshOrderBtn');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Refreshing...';
    btn.disabled = true;
    
    console.log('🔄 Refreshing order status...');
    
    // محاكاة تحديث
    setTimeout(() => {
        // تحديث حالة عشوائية
        const statuses = ['Processing', 'Dispatched', 'In Transit', 'Out for Delivery', 'Delivered'];
        const currentStatus = document.querySelector('.status-badge').textContent;
        const currentIndex = statuses.indexOf(currentStatus);
        
        if (currentIndex < statuses.length - 1 && Math.random() > 0.7) {
            const newStatus = statuses[currentIndex + 1];
            document.querySelector('.status-badge').textContent = newStatus;
            updateProgressForStatus(newStatus);
            showNotification(`Status updated to: ${newStatus}`, 'info');
        } else {
            showNotification('Order status is up to date', 'success');
        }
        
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        
        console.log('✅ Order status refreshed');
    }, 1500);
}

function handleNewOrder() {
    const btn = document.getElementById('newOrderBtn');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Creating...';
    btn.disabled = true;
    
    console.log('🆕 Creating new order...');
    
    setTimeout(() => {
        // إنشاء طلب جديد
        const newOrder = createNewOrder();
        displayCurrentOrder(newOrder);
        resetProgressTracker();
        
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        
        showNotification(`New order created: ${newOrder.number}`, 'success');
        console.log('✅ New order created:', newOrder.number);
    }, 2000);
}

// ✅ 4. تحديث التقدم
function updateProgressForStatus(status) {
    const steps = document.querySelectorAll('.progress-step');
    const statusMap = {
        'Processing': 1,
        'Dispatched': 2,
        'In Transit': 3,
        'Out for Delivery': 4,
        'Delivered': 5
    };
    
    const targetStep = statusMap[status] || 0;
    
    steps.forEach((step, index) => {
        const icon = step.querySelector('.step-icon');
        const time = step.querySelector('.step-time');
        
        if (index < targetStep) {
            icon.className = 'step-icon completed';
            icon.innerHTML = '<i class="fas fa-check"></i>';
        } else if (index === targetStep) {
            icon.className = 'step-icon active';
            icon.innerHTML = '<i class="fas fa-cog"></i>';
            icon.style.animation = 'pulse 2s infinite';
        } else {
            icon.className = 'step-icon';
            icon.innerHTML = '<i class="fas fa-clock"></i>';
            icon.style.animation = '';
        }
        
        // تحديث الوقت للخطوة النشطة
        if (index === targetStep) {
            time.textContent = new Date().toLocaleString();
        }
    });
    
    // تحديث خط التقدم
    updateProgressLine(targetStep, steps.length);
}

function resetProgressTracker() {
    const steps = document.querySelectorAll('.progress-step');
    
    steps.forEach((step, index) => {
        const icon = step.querySelector('.step-icon');
        const time = step.querySelector('.step-time');
        
        if (index === 0) {
            icon.className = 'step-icon completed';
            icon.innerHTML = '<i class="fas fa-check"></i>';
            time.textContent = new Date().toLocaleString();
        } else if (index === 1) {
            icon.className = 'step-icon active';
            icon.innerHTML = '<i class="fas fa-cog"></i>';
            icon.style.animation = 'pulse 2s infinite';
            time.textContent = 'In progress';
        } else {
            icon.className = 'step-icon';
            icon.innerHTML = '<i class="fas fa-clock"></i>';
            time.textContent = index === steps.length - 1 ? 'Pending' : 'Not started';
        }
    });
    
    updateProgressLine(1, steps.length);
}

function updateProgressLine(completedSteps, totalSteps) {
    const progressLine = document.querySelector('.progress-line');
    const progressPercentage = (completedSteps / totalSteps) * 100;
    
    progressLine.style.width = `${progressPercentage}%`;
    progressLine.style.transition = 'width 0.5s ease-in-out';
}

// ✅ 5. نظام الإشعارات
function showNotification(message, type = 'info') {
    const alertClass = {
        'info': 'alert-info',
        'success': 'alert-success',
        'warning': 'alert-warning',
        'error': 'alert-danger'
    }[type] || 'alert-info';
    
    const notification = document.createElement('div');
    notification.className = `alert ${alertClass} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    const icon = {
        'info': 'fa-info-circle',
        'success': 'fa-check-circle',
        'warning': 'fa-exclamation-triangle',
        'error': 'fa-times-circle'
    }[type] || 'fa-info-circle';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas ${icon} me-2"></i>
            <div class="flex-grow-1">${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // إزالة تلقائية بعد 5 ثوان
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ✅ 6. الأنظمة الأخرى (مبسطة)
function initEnhancedNavigation() {
    // تأثير التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '';
            navbar.style.backdropFilter = '';
        }
    });
}

function initInteractiveProgressTracker() {
    const steps = document.querySelectorAll('.progress-step');
    
    steps.forEach(step => {
        step.style.cursor = 'pointer';
        step.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}

function initRealTimeOrderUpdates() {
    // تحديث تلقائي كل دقيقة
    setInterval(() => {
        const status = document.querySelector('.status-badge').textContent;
        if (status !== 'Delivered' && Math.random() > 0.8) {
            handleRefreshOrder();
        }
    }, 60000);
}

function initSmartInventorySystem() {
    console.log('📦 Inventory system ready');
    // نظام المخزون الأساسي
}

function initSupportSystem() {
    // جعل عناصر الاتصال قابلة للنقر
    document.querySelectorAll('.contact-method').forEach(method => {
        method.style.cursor = 'pointer';
        method.addEventListener('click', function() {
            const contact = this.querySelector('.contact-detail').textContent;
            navigator.clipboard.writeText(contact);
            showNotification(`Copied: ${contact}`, 'success');
        });
    });
}

// ✅ التأكد من تحميل المكتبات المطلوبة
function checkDependencies() {
    if (typeof bootstrap === 'undefined') {
        console.warn('⚠️ Bootstrap not loaded');
    }
    if (typeof $ === 'undefined') {
        console.warn('⚠️ jQuery not loaded (if needed)');
    }
}

// تشغيل فحص المكتبات
checkDependencies();