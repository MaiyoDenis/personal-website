// General API service for handling various API calls
const api = {
  async scheduleAppointment(appointmentData) {
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to schedule appointment');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('API service error:', error);
      throw error;
    }
  },

  // Generic API call method
  async call(endpoint, options = {}) {
    try {
      const response = await fetch(endpoint, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `API call failed: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  }
};

export default api;
