/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignupPage.css'; // تأكد من أن المسار صحيح


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  
  // التحقق من البريد الإلكتروني باستخدام تعبير منتظم
  const isEmailValid = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  
  // التحقق من قوة كلمة المرور
  const isPasswordStrong = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  // تحديد الرسالة حسب الجنسية
  const greetings = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  return (
    <div className='signup'>
      <h2>Signup Page</h2>
      
      {/* إدخال البريد الإلكتروني */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{ borderColor: isEmailValid ? 'green' : 'red' }}
      />
      
      {/* إدخال كلمة المرور */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{ borderColor: isPasswordStrong ? 'green' : 'red' }}
      />
      
      {/* إدخال الجنسية */}
      <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
        <option value="fi">Finnish</option>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      
      {/* فقرة التحية */}
      <p>{greetings[nationality]}</p>

      {/* النص عن البريد الإلكتروني */}
      <p>Your email is {email}</p>  {/* تم التعديل هنا */}
    </div>
  );
};

export default SignupPage;
