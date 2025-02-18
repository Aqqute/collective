function PasswordRecoveryFlow() {
    const [step, setStep] = useState('form'); // 'form' or 'notification'
    const [email, setEmail] = useState('');
  
    const handleSubmit = (submittedEmail) => {
      setEmail(submittedEmail);
      // Here you would typically make an API call to request the password reset
      setStep('notification');
    };
  
    const handleBack = () => {
      setStep('form');
    };
  
    return (
      <>
        {step === 'form' && (
          <ResetPasswordForm 
            onSubmit={handleSubmit} 
            onBack={() => {/* Navigate back to login */}} 
          />
        )}
        {step === 'notification' && (
          <RecoverPasswordNotification 
            email={email} 
            onBack={handleBack}
            onResend={() => {/* Resend the reset email */}} 
          />
        )}
      </>
    );
  }