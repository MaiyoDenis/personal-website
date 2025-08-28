// Email service for handling contact form submissions
const emailService = {
  async sendEmail(formData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Email service error:', error);
      throw error;
    }
  }
};

export default emailService;
