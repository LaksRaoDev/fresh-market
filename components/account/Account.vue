<template>
    <!-- Account Page Main Content -->
    <main class="bg-gray-50 min-h-screen py-10">
      <div class="container mx-auto px-4">
  
        <!-- Page Title / Breadcrumbs -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-700">My Account</h1>
          <p class="text-gray-500">Manage your profile, orders, and settings here.</p>
        </div>
  
        <!-- Account Container -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
  
          <!-- Sidebar / Account Navigation -->
          <aside class="bg-white rounded-lg shadow p-4 lg:col-span-1">
            <ul class="space-y-2">
              <!-- Profile Tab -->
              <li>
                <button
                  class="w-full flex items-center p-2 rounded-md"
                  :class="activeTab === 'profileSection' ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'"
                  @click="setActiveTab('profileSection')">
                  <i class="ri-user-line w-5 h-5 mr-2"></i>
                  Profile
                </button>
              </li>
  
              <!-- Orders Tab -->
              <li>
                <button 
                  class="w-full flex items-center p-2 rounded-md"
                  :class="activeTab === 'ordersSection' ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'"
                  @click="setActiveTab('ordersSection')">
                  <i class="ri-file-list-3-line w-5 h-5 mr-2"></i>
                  Orders
                </button>
              </li>
  
              <!-- Password Tab -->
              <li>
                <button 
                  class="w-full flex items-center p-2 rounded-md"
                  :class="activeTab === 'passwordSection' ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'"
                  @click="setActiveTab('passwordSection')">
                  <i class="ri-lock-line w-5 h-5 mr-2"></i>
                  Password
                </button>
              </li>
  
              <!-- Settings Tab -->
              <li>
                <button 
                  class="w-full flex items-center p-2 rounded-md"
                  :class="activeTab === 'settingsSection' ? 'bg-emerald-50 text-emerald-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'"
                  @click="setActiveTab('settingsSection')">
                  <i class="ri-settings-3-line w-5 h-5 mr-2"></i>
                  Settings
                </button>
              </li>
  
              <!-- Logout (just a placeholder link) -->
              <li>
                <a href="#" class="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-100">
                  <i class="ri-logout-box-r-line w-5 h-5 mr-2"></i>
                  Logout
                </a>
              </li>
            </ul>
          </aside>
  
          <!-- Main Content (Tab Sections) -->
          <section class="lg:col-span-3 bg-white rounded-lg shadow p-6">
  
            <!-- Profile Section -->
            <div v-if="activeTab === 'profileSection'">
              <h2 class="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
              <p class="text-gray-500 mb-6">
                Update your personal information below.
              </p>
              <form class="space-y-6" @submit.prevent="saveProfile">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Full Name -->
                  <div>
                    <label class="block text-gray-600 mb-2 font-medium" for="fullName">Full Name</label>
                    <input type="text" id="fullName" v-model="profile.fullName"
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" />
                  </div>
                  <!-- Email -->
                  <div>
                    <label class="block text-gray-600 mb-2 font-medium" for="email">Email Address</label>
                    <input type="email" id="email" v-model="profile.email"
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" />
                  </div>
                </div>
                <!-- Phone Number -->
                <div>
                  <label class="block text-gray-600 mb-2 font-medium" for="phone">Phone Number</label>
                  <input type="tel" id="phone" v-model="profile.phone"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
                    placeholder="+1 (555) 000-0000" />
                </div>
                <!-- Address -->
                <div>
                  <label class="block text-gray-600 mb-2 font-medium" for="address">Address</label>
                  <input type="text" id="address" v-model="profile.address"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500"
                    placeholder="123 Green Valley Road" />
                </div>
                <!-- Save Button -->
                <div>
                  <button type="submit"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
  
            <!-- Orders Section -->
            <div v-if="activeTab === 'ordersSection'">
              <h2 class="text-xl font-semibold text-gray-700 mb-4">My Orders</h2>
              <p class="text-gray-500 mb-6">View your order history and track current orders.</p>
              <!-- Example orders table -->
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b">
                      <th class="py-2 px-4">Order ID</th>
                      <th class="py-2 px-4">Date</th>
                      <th class="py-2 px-4">Status</th>
                      <th class="py-2 px-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order.id" class="border-b hover:bg-gray-50">
                      <td class="py-2 px-4">{{ order.id }}</td>
                      <td class="py-2 px-4">{{ order.date }}</td>
                      <td class="py-2 px-4" :class="getStatusClass(order.status)">{{ order.status }}</td>
                      <td class="py-2 px-4">{{ order.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- Password Section -->
            <div v-if="activeTab === 'passwordSection'">
              <h2 class="text-xl font-semibold text-gray-700 mb-4">Change Password</h2>
              <p class="text-gray-500 mb-6">Update your password regularly to keep your account secure.</p>
              <form class="space-y-6 max-w-md" @submit.prevent="updatePassword">
                <div>
                  <label class="block text-gray-600 mb-2 font-medium" for="currentPassword">Current Password</label>
                  <input type="password" id="currentPassword" v-model="passwords.current"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" />
                </div>
                <div>
                  <label class="block text-gray-600 mb-2 font-medium" for="newPassword">New Password</label>
                  <input type="password" id="newPassword" v-model="passwords.new"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" />
                </div>
                <div>
                  <label class="block text-gray-600 mb-2 font-medium" for="confirmPassword">Confirm New Password</label>
                  <input type="password" id="confirmPassword" v-model="passwords.confirm"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500" />
                </div>
                <button type="submit"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  Update Password
                </button>
              </form>
            </div>
  
            <!-- Settings Section -->
            <div v-if="activeTab === 'settingsSection'">
              <h2 class="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
              <p class="text-gray-500 mb-6">Manage various preferences and notification settings.</p>
              <form class="space-y-6" @submit.prevent="saveSettings">
                <!-- Example: Toggle notification emails -->
                <div class="flex items-center">
                  <input type="checkbox" id="emailNotifications" v-model="settings.emailNotifications"
                    class="w-5 h-5 text-emerald-600 border-gray-300 focus:ring-emerald-500" />
                  <label for="emailNotifications" class="ml-2 text-gray-600">Enable email notifications</label>
                </div>
  
                <div class="flex items-center">
                  <input type="checkbox" id="smsNotifications" v-model="settings.smsNotifications"
                    class="w-5 h-5 text-emerald-600 border-gray-300 focus:ring-emerald-500" />
                  <label for="smsNotifications" class="ml-2 text-gray-600">Enable SMS notifications</label>
                </div>
  
                <button type="submit"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  Save Settings
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // State for active tab
  const activeTab = ref('profileSection');
  
  // Profile form data
  const profile = ref({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '',
    address: ''
  });
  
  // Password form data
  const passwords = ref({
    current: '',
    new: '',
    confirm: ''
  });
  
  // Settings form data
  const settings = ref({
    emailNotifications: false,
    smsNotifications: false
  });
  
  // Sample orders data
  const orders = ref([
    { id: 'FM-1001', date: '2025-03-01', status: 'Shipped', total: '$65.00' },
    { id: 'FM-1000', date: '2025-02-25', status: 'Delivered', total: '$48.00' },
    { id: 'FM-0999', date: '2025-02-20', status: 'Cancelled', total: '$80.00' }
  ]);
  
  // Tab switching function
  const setActiveTab = (tabId) => {
    activeTab.value = tabId;
  };
  
  // Get class for order status
  const getStatusClass = (status) => {
    if (status === 'Delivered') return 'text-emerald-600';
    if (status === 'Cancelled') return 'text-red-500';
    return '';
  };
  
  // Form submission handlers
  const saveProfile = () => {
    console.log('Saving profile:', profile.value);
    // Here you would typically make an API call to save the data
  };
  
  const updatePassword = () => {
    if (passwords.value.new !== passwords.value.confirm) {
      alert('Passwords do not match');
      return;
    }
    console.log('Updating password');
    // Here you would typically make an API call to update the password
  };
  
  const saveSettings = () => {
    console.log('Saving settings:', settings.value);
    // Here you would typically make an API call to save the settings
  };
  </script>