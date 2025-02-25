"use client";
import ResetPasswordForm from "@/components/auth/ResetPassword";


export default function ResetPasswordPage() {
    const handleFormSubmit = (email: string) => {
        console.log('Form submitted with email:', email);
    };

    const handleBackClick = () => {
        console.log('Back button clicked');
    };

    return (
        <ResetPasswordForm 
            onSubmit={handleFormSubmit} 
            onBack={handleBackClick} 
        />
    );
}