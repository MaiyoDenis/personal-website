// Chat service for handling chatbot interactions
const chatService = {
  async sendMessage(message) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Chat service error:', error);
      throw error;
    }
  }
};

export default chatService;
