import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function OrderTracking() {
  const { orderId } = useParams(); // لو عايز تستخدم order ID من الـ URL
  const [activeStep, setActiveStep] = useState(5);

  useEffect(() => {
    // يمكن إضافة أي logic إضافية هنا
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been successfully placed and confirmed.',
      time: 'July 28, 2025, 10:00 AM',
      icon: 'fa-check',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Processing at Warehouse',
      description: 'Warehouse is preparing your order for shipment.',
      time: 'July 29, 2025, 02:30 PM',
      icon: 'fa-check',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Dispatched',
      description: 'Your order has been dispatched from the warehouse.',
      time: 'July 31, 2025, 09:00 AM',
      icon: 'fa-check',
      status: 'completed'
    },
    {
      id: 4,
      title: 'In Transit',
      description: 'Your order is en route to the local distribution hub.',
      time: 'August 1, 2025, 07:45 PM',
      icon: 'fa-check',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Out for Delivery',
      description: 'Your order is with a local courier and is out for delivery today.',
      time: 'August 2, 2024, 08:30 AM',
      icon: 'fa-truck',
      status: 'active'
    },
    {
      id: 6,
      title: 'Delivered',
      description: 'Your order has been successfully delivered.',
      time: 'Pending',
      icon: 'fa-box',
      status: 'pending'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Main Content */}
      <div className="container py-4">
        <h1 className="page-title fw-bold">Order Tracking</h1>

        {/* Order Header */}
        <div className="order-header">
          <h2 className="order-number fw-bold">Order #{orderId || '01'}</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value"><span className="status-badge">Out for Delivery</span></span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="detail-item">
                <span className="detail-label">Customer</span>
                <span className="detail-value">Retailer Solutions LLC</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="detail-item">
                <span className="detail-label">Order Date</span>
                <span className="detail-value">July 28, 2025</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="detail-item">
                <span className="detail-label">Total Amount</span>
                <span className="detail-value">25000 EGP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <h2 className="section-title fw-bold">Order Progress</h2>
          <div className="progress-tracker">
            <div className="progress-line"></div>

            {steps.map((step) => (
              <div key={step.id} className="progress-step" onClick={() => setActiveStep(step.id)}>
                <div className={`step-icon ${step.status}`}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-time">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Information */}
        <div className="delivery-info">
          <h2 className="section-title fw-bold">Delivery Information</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="info-item">
                <span className="info-label">Tracking Number</span>
                <span className="info-value">AAA123</span>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="info-item">
                <span className="info-label">Carrier</span>
                <span className="info-value">Warezo Logistics</span>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="info-item">
                <span className="info-label">Estimated Delivery</span>
                <span className="info-value">august 2, 2025, by 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="support-section">
          <h2 className="support-title fw-bold">Need Help?</h2>
          <p className="support-description">Contact our support team for any inquiries regarding your order.</p>

          <div className="row justify-content-center mb-4">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <span className="contact-detail">01032238839</span>
                <span className="contact-type">Phone Support</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="contact-detail">support@warezo.com</span>
                <span className="contact-type">Email Support</span>
              </div>
            </div>
          </div>

          <a href="#" className="btn btn-primary btn-lg px-4">Contact Support</a>
        </div>
      </div>
    </div>
  );
}