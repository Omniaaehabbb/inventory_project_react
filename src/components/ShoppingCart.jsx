import { useState } from 'react';

const initialCart = [
  { id: 1, name: 'Premium Organic Coffee Beans', desc: 'Dark Roast, 1kg Bag', price: 25, qty: 1, img: '/images/Selection(3).png' },
  { id: 2, name: 'Organic Green Tea', desc: 'Herbal, 250g Pack', price: 15, qty: 2, img: '/images/Selection(4).png' },
  { id: 3, name: 'Almond Cookies', desc: 'Box of 12 pcs', price: 10, qty: 1, img: '/images/Selection(5).png' },
  { id: 4, name: 'Natural Honey', desc: '500ml Glass Jar', price: 12, qty: 3, img: '/images/Selection(6).png' },
];

const initialDelivery = {
  name: 'Retail Store Manager',
  phone: '+1 (555) 123-4567',
  address1: '123 Market Street',
  address2: 'Suite 100',
  city: 'Businessville',
  state: 'CA',
  postal: '90210',
  country: 'United States',
  date: '2024-08-15',
  time: '10:00 AM - 12:00 PM',
  instructions: 'Leave packages at the back entrance.',
  sameBilling: true,
};

export default function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);
  const [delivery, setDelivery] = useState(initialDelivery);
  const [payment, setPayment] = useState('credit');

  const updateQty = (id, qty) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 5;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const styles = {
    sidebar: { background: '#fff', borderRight: '1px solid #e9ecef' },
    orderCard: { borderLeft: '4px solid #6f42c1' },
    totalAmount: { fontSize: '1.25rem', color: '#0d6efd', fontWeight: 700 }
  };

  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row">
          
          {/* SIDEBAR */}
          <aside className="col-md-2 d-none d-md-flex flex-column p-3 vh-100" style={styles.sidebar}>
            <div>
              <img src="/images/Selection(1).png" alt="Logo" className="img-fluid" style={{maxWidth: '120px'}} />
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><a className="nav-link text-dark" href="#">📊 Store Dashboard</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-dark" href="#">📦 Product Catalog</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-dark" href="#">🧾 Orders</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-dark" href="#">🚚 Order Tracking</a></li>
                <li className="nav-item"><a className="nav-link text-dark" href="#">⚙️ Profile Settings</a></li>
              </ul>
            </div>
            <div className="mt-auto">
              <button className="btn btn-danger w-100">Logout</button>
            </div>
          </aside>

          {/* MAIN */}
          <main className="col-md-6 p-4">
            <h4 className="mb-3">Shopping Cart ({cart.length} Items)</h4>
            <div className="card mb-4 p-3">
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src={item.img} className="img-fluid rounded me-3" style={{width: '70px', height: '70px'}} alt={item.name} />
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.desc}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <input 
                      type="number" 
                      className="form-control me-2" 
                      style={{width: '70px'}} 
                      value={item.qty} 
                      min="1"
                      onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 1)}
                    />
                    <span className="fw-bold me-3">${item.price * item.qty}</span>
                    <a href="#" className="text-decoration-none me-2">Edit</a>
                    <a href="#" className="text-danger text-decoration-none" onClick={(e) => { e.preventDefault(); removeItem(item.id); }}>Remove</a>
                  </div>
                </div>
              ))}
            </div>

            {/* DELIVERY INFORMATION */}
            <div className="card p-4">
              <h5 className="mb-4">Delivery Information</h5>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">Recipient Name</label>
                  <input type="text" className="form-control" value={delivery.name} onChange={e => setDelivery({...delivery, name: e.target.value})} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Contact Number</label>
                  <input type="text" className="form-control" value={delivery.phone} onChange={e => setDelivery({...delivery, phone: e.target.value})} />
                </div>
                <div className="col-12">
                  <label className="form-label">Address Line 1</label>
                  <input type="text" className="form-control" value={delivery.address1} onChange={e => setDelivery({...delivery, address1: e.target.value})} />
                </div>
                <div className="col-12">
                  <label className="form-label">Address Line 2 (Optional)</label>
                  <input type="text" className="form-control" value={delivery.address2} onChange={e => setDelivery({...delivery, address2: e.target.value})} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" value={delivery.city} onChange={e => setDelivery({...delivery, city: e.target.value})} />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" value={delivery.state} onChange={e => setDelivery({...delivery, state: e.target.value})} />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Postal Code</label>
                  <input type="text" className="form-control" value={delivery.postal} onChange={e => setDelivery({...delivery, postal: e.target.value})} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Country</label>
                  <select className="form-select" value={delivery.country} onChange={e => setDelivery({...delivery, country: e.target.value})}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>UK</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" className="form-control" value={delivery.date} onChange={e => setDelivery({...delivery, date: e.target.value})} />
                </div>
                <div className="col-sm-3">
                  <label className="form-label">Preferred Time</label>
                  <select className="form-select" value={delivery.time} onChange={e => setDelivery({...delivery, time: e.target.value})}>
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 2:00 PM</option>
                    <option>2:00 PM - 4:00 PM</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Delivery Instructions</label>
                  <textarea className="form-control" rows="2" value={delivery.instructions} onChange={e => setDelivery({...delivery, instructions: e.target.value})} />
                </div>
              </div>
              <div className="mt-4">
                <h6>Billing Information</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="sameBilling" checked={delivery.sameBilling} onChange={e => setDelivery({...delivery, sameBilling: e.target.checked})} />
                  <label className="form-check-label" htmlFor="sameBilling">Same as delivery address</label>
                </div>
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="col-md-4 p-4">
            <div className="card p-3 mb-4" style={styles.orderCard}>
              <h6 className="mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between"><span>Subtotal ({cart.length} items)</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="d-flex justify-content-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="d-flex justify-content-between"><span>Taxes (8%)</span><span>${tax.toFixed(2)}</span></div>
              <div className="d-flex justify-content-between"><span>Discount</span><span className="text-success">- $0.00</span></div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">Total</span>
                <span style={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 mt-3">Place Order</button>
            </div>

            <div className="card p-3">
              <h6 className="mb-3">Payment Options</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="credit" checked={payment === 'credit'} onChange={() => setPayment('credit')} />
                <label className="form-check-label" htmlFor="credit">Credit / Debit Card</label>
              </div>
              {payment === 'credit' && (
                <>
                  <div className="mb-2"><input type="text" className="form-control" placeholder="Card Number" /></div>
                  <div className="mb-2"><input type="text" className="form-control" placeholder="Cardholder Name" /></div>
                  <div className="row">
                    <div className="col-6 mb-2"><input type="text" className="form-control" placeholder="MM/YY" /></div>
                    <div className="col-6 mb-2"><input type="text" className="form-control" placeholder="CVV" /></div>
                  </div>
                </>
              )}
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="wallet" checked={payment === 'wallet'} onChange={() => setPayment('wallet')} />
                <label className="form-check-label" htmlFor="wallet">Mobile Wallet</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="payment" id="cash" checked={payment === 'cash'} onChange={() => setPayment('cash')} />
                <label className="form-check-label" htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}