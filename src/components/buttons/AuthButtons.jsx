"use client";
import { signOut, useSession } from "next-auth/react";
import { useState, useRef } from "react";
import LoginForm from "../auth/LoginForm";
import { RegisterForm } from "../auth/RegisterForm";

const AuthButtons = () => {
  const { status } = useSession();
  const modalCheckRef = useRef(null);
  // Track which form to show: 'login' or 'register'
  const [view, setView] = useState("login");

  const handleCloseModal = () => {
    if (modalCheckRef.current) modalCheckRef.current.checked = false;
  };

  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={() => signOut()} className="btn btn-primary">Log Out</button>
      ) : (
        <>
          <label htmlFor="auth-modal" className="btn btn-primary btn-outline" onClick={() => setView("login")}>
            Login
          </label>

          <input type="checkbox" id="auth-modal" className="modal-toggle" ref={modalCheckRef} />
          
          <div className="modal" role="dialog">
            <div className="modal-box p-0 max-w-sm relative">
              <label htmlFor="auth-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50">✕</label>
              
              {view === "login" ? (
                <LoginForm 
                  isModal={true} 
                  closeModal={handleCloseModal} 
                  switchToRegister={() => setView("register")} 
                />
              ) : (
                <RegisterForm
                  isModal={true} 
                  closeModal={handleCloseModal} 
                  switchToLogin={() => setView("login")} 
                />
              )}
            </div>
            <label className="modal-backdrop" htmlFor="auth-modal">Close</label>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButtons;