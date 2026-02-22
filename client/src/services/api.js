const API_BASE_URL = '/api';

class ApiService {
    constructor() {
        this.baseUrl = API_BASE_URL;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const token = this.getToken();

        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(url, config);

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'Request failed' }));
            throw new Error(error.message || 'Request failed');
        }

        return response.json();
    }

    // Auth endpoints
    async login(email, password) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    }

    async register(userData) {
        return this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    }

    // User endpoints
    async getProfile() {
        return this.request('/users/profile');
    }

    async updateProfile(profileData) {
        return this.request('/users/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData),
        });
    }

    async uploadAvatar(file) {
        const formData = new FormData();
        formData.append('avatar', file);

        const url = `${this.baseUrl}/users/profile/avatar`;
        const token = this.getToken();

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: token ? { 'Authorization': `Bearer ${token}` } : {},
            // Do not set Content-Type header manually for FormData to allow browser to generate boundary
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'Image upload failed' }));
            throw new Error(error.message || 'Image upload failed');
        }

        return response.json();
    }

    async getUserById(userId) {
        return this.request(`/users/${userId}`);
    }

    async searchUsers(query) {
        const params = new URLSearchParams(query).toString();
        return this.request(`/users/search?${params}`);
    }

    // Recommendations endpoints
    async getRecommendations() {
        return this.request('/recommendations');
    }

    async getSimilarUsers(userId) {
        return this.request(`/recommendations/similar/${userId}`);
    }

    // Connections endpoints
    async getConnections() {
        return this.request('/connections');
    }

    async sendConnectionRequest(userId) {
        return this.request(`/connections/request/${userId}`, {
            method: 'POST',
        });
    }

    async acceptConnection(requestId) {
        return this.request(`/connections/accept/${requestId}`, {
            method: 'PUT',
        });
    }

    async rejectConnection(requestId) {
        return this.request(`/connections/reject/${requestId}`, {
            method: 'PUT',
        });
    }

    async removeConnection(connectionId) {
        return this.request(`/connections/${connectionId}`, {
            method: 'DELETE',
        });
    }

    async getConnectionStatus(userId) {
        return this.request(`/connections/status/${userId}`);
    }

    // Messages endpoints
    async getConversations() {
        return this.request('/messages/conversations');
    }

    async getMessages(userId) {
        return this.request(`/messages/${userId}`);
    }

    async sendMessage(userId, content) {
        return this.request(`/messages/${userId}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });
    }

    async deleteMessage(messageId) {
        return this.request(`/messages/${messageId}`, {
            method: 'DELETE'
        });
    }

    // User interaction endpoints
    async getInteractionStatus(userId) {
        return this.request(`/users/interaction-status/${userId}`);
    }

    async getBlockedUsers() {
        return this.request('/users/blocked');
    }

    async muteUser(userId) {
        return this.request(`/users/mute/${userId}`, { method: 'PUT' });
    }

    async blockUser(userId) {
        return this.request(`/users/block/${userId}`, { method: 'PUT' });
    }

    async clearChat(userId) {
        return this.request(`/users/clear-chat/${userId}`, { method: 'PUT' });
    }

    // Notification endpoints
    async getNotifications() {
        return this.request('/notifications');
    }

    async getUnreadCount() {
        return this.request('/notifications/unread-count');
    }

    async markNotificationRead(id) {
        return this.request(`/notifications/${id}/read`, {
            method: 'PUT',
        });
    }

    async markAllNotificationsRead() {
        return this.request('/notifications/read-all', {
            method: 'PUT',
        });
    }

    // Dashboard endpoints
    async getDashboardStats() {
        return this.request('/users/dashboard');
    }
}

export const api = new ApiService();
export default api;
