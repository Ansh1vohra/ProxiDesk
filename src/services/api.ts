const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

interface ApiResponse {
    success?: boolean;
    message?: string;
    error?: string;
    user?: {
      email: string;
      userName: string;
      isNewUser: boolean;
    };
  }
  
  export const requestOTP = async (email: string): Promise<ApiResponse> => {
    const response = await fetch(`${API_BASE_URL}/api/user/request-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to request OTP');
    }
  
    return response.json();
  };
  
  export const verifyAndSignIn = async (
    email: string,
    otp: string,
  ): Promise<ApiResponse> => {
    const response = await fetch(`${API_BASE_URL}/api/user/verify-signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to verify OTP');
    }
  
    return response.json();
  };