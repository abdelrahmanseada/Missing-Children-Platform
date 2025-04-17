import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Settings() {
  const [settings, setSettings] = useState({
    account: {
      email: 'user@example.com',
      phone: '+1 (555) 123-4567',
      language: 'en',
      timezone: 'America/New_York',
      dateFormat: 'MM/DD/YYYY',
      timeFormat: '12h'
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowTagging: true,
      allowMessaging: true,
      dataSharing: 'limited'
    },
    notifications: {
      email: true,
      sms: false,
      inApp: true,
      matchAlerts: true,
      communityUpdates: false,
      systemUpdates: true
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      reduceMotion: false,
      highContrast: false
    },
    security: {
      twoFactorEnabled: false,
      loginNotifications: true,
      sessionTimeout: 30,
      passwordExpiry: 90
    }
  });

  const [activeTab, setActiveTab] = useState('account');
  const [isSaving, setIsSaving] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (section, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value
      }
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
      console.error('Error saving settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    // Reset to default settings
    setSettings({
      account: {
        email: 'user@example.com',
        phone: '+1 (555) 123-4567',
        language: 'en',
        timezone: 'America/New_York',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12h'
      },
      privacy: {
        profileVisibility: 'public',
        showEmail: false,
        showPhone: false,
        allowTagging: true,
        allowMessaging: true,
        dataSharing: 'limited'
      },
      notifications: {
        email: true,
        sms: false,
        inApp: true,
        matchAlerts: true,
        communityUpdates: false,
        systemUpdates: true
      },
      appearance: {
        theme: 'light',
        fontSize: 'medium',
        reduceMotion: false,
        highContrast: false
      },
      security: {
        twoFactorEnabled: false,
        loginNotifications: true,
        sessionTimeout: 30,
        passwordExpiry: 90
      }
    });
    toast.success('Settings reset to defaults');
  };

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          className="input-field"
          value={settings.account.email}
          onChange={(e) => handleInputChange('account', 'email', e.target.value)}
        />
        <p className="form-hint">This email will be used for account notifications and communications.</p>
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          className="input-field"
          value={settings.account.phone}
          onChange={(e) => handleInputChange('account', 'phone', e.target.value)}
        />
        <p className="form-hint">Your phone number will be used for SMS notifications if enabled.</p>
      </div>

      <div className="form-group">
        <label htmlFor="language" className="form-label">Language</label>
        <select
          id="language"
          className="input-field"
          value={settings.account.language}
          onChange={(e) => handleInputChange('account', 'language', e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="timezone" className="form-label">Timezone</label>
        <select
          id="timezone"
          className="input-field"
          value={settings.account.timezone}
          onChange={(e) => handleInputChange('account', 'timezone', e.target.value)}
        >
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="America/Chicago">Central Time (CT)</option>
          <option value="America/Denver">Mountain Time (MT)</option>
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="America/Anchorage">Alaska Time (AKT)</option>
          <option value="Pacific/Honolulu">Hawaii Time (HT)</option>
          <option value="Europe/London">London (GMT/BST)</option>
          <option value="Europe/Paris">Paris (CET/CEST)</option>
          <option value="Asia/Tokyo">Tokyo (JST)</option>
          <option value="Australia/Sydney">Sydney (AEST/AEDT)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="dateFormat" className="form-label">Date Format</label>
          <select
            id="dateFormat"
            className="input-field"
            value={settings.account.dateFormat}
            onChange={(e) => handleInputChange('account', 'dateFormat', e.target.value)}
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeFormat" className="form-label">Time Format</label>
          <select
            id="timeFormat"
            className="input-field"
            value={settings.account.timeFormat}
            onChange={(e) => handleInputChange('account', 'timeFormat', e.target.value)}
          >
            <option value="12h">12-hour (AM/PM)</option>
            <option value="24h">24-hour</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="form-group">
        <label htmlFor="profileVisibility" className="form-label">Profile Visibility</label>
        <select
          id="profileVisibility"
          className="input-field"
          value={settings.privacy.profileVisibility}
          onChange={(e) => handleInputChange('privacy', 'profileVisibility', e.target.value)}
        >
          <option value="public">Public</option>
          <option value="friends">Friends Only</option>
          <option value="private">Private</option>
        </select>
        <p className="form-hint">Control who can see your profile information.</p>
      </div>

      <div className="form-group">
        <label htmlFor="dataSharing" className="form-label">Data Sharing</label>
        <select
          id="dataSharing"
          className="input-field"
          value={settings.privacy.dataSharing}
          onChange={(e) => handleInputChange('privacy', 'dataSharing', e.target.value)}
        >
          <option value="full">Full</option>
          <option value="limited">Limited</option>
          <option value="minimal">Minimal</option>
          <option value="none">None</option>
        </select>
        <p className="form-hint">Control how your data is shared with third parties.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Show Email Address</h4>
            <p className="text-sm text-gray-500">Display your email address on your profile</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.privacy.showEmail ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.privacy.showEmail}
            aria-labelledby="show-email-label"
            onClick={() => handleInputChange('privacy', 'showEmail', !settings.privacy.showEmail)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.privacy.showEmail ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Show Phone Number</h4>
            <p className="text-sm text-gray-500">Display your phone number on your profile</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.privacy.showPhone ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.privacy.showPhone}
            aria-labelledby="show-phone-label"
            onClick={() => handleInputChange('privacy', 'showPhone', !settings.privacy.showPhone)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.privacy.showPhone ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Interaction Settings</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Allow Tagging</h4>
            <p className="text-sm text-gray-500">Allow others to tag you in posts and comments</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.privacy.allowTagging ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.privacy.allowTagging}
            aria-labelledby="allow-tagging-label"
            onClick={() => handleInputChange('privacy', 'allowTagging', !settings.privacy.allowTagging)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.privacy.allowTagging ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Allow Messaging</h4>
            <p className="text-sm text-gray-500">Allow others to send you direct messages</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.privacy.allowMessaging ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.privacy.allowMessaging}
            aria-labelledby="allow-messaging-label"
            onClick={() => handleInputChange('privacy', 'allowMessaging', !settings.privacy.allowMessaging)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.privacy.allowMessaging ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Notification Channels</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive notifications via email</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.email ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.email}
            aria-labelledby="email-notifications-label"
            onClick={() => handleInputChange('notifications', 'email', !settings.notifications.email)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.email ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">SMS Notifications</h4>
            <p className="text-sm text-gray-500">Receive notifications via SMS</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.sms ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.sms}
            aria-labelledby="sms-notifications-label"
            onClick={() => handleInputChange('notifications', 'sms', !settings.notifications.sms)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.sms ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">In-App Notifications</h4>
            <p className="text-sm text-gray-500">Receive notifications within the application</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.inApp ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.inApp}
            aria-labelledby="in-app-notifications-label"
            onClick={() => handleInputChange('notifications', 'inApp', !settings.notifications.inApp)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.inApp ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Notification Types</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Match Alerts</h4>
            <p className="text-sm text-gray-500">Receive notifications when potential matches are found</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.matchAlerts ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.matchAlerts}
            aria-labelledby="match-alerts-label"
            onClick={() => handleInputChange('notifications', 'matchAlerts', !settings.notifications.matchAlerts)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.matchAlerts ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Community Updates</h4>
            <p className="text-sm text-gray-500">Receive notifications about community activity</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.communityUpdates ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.communityUpdates}
            aria-labelledby="community-updates-label"
            onClick={() => handleInputChange('notifications', 'communityUpdates', !settings.notifications.communityUpdates)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.communityUpdates ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">System Updates</h4>
            <p className="text-sm text-gray-500">Receive notifications about system updates and maintenance</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.notifications.systemUpdates ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.notifications.systemUpdates}
            aria-labelledby="system-updates-label"
            onClick={() => handleInputChange('notifications', 'systemUpdates', !settings.notifications.systemUpdates)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.notifications.systemUpdates ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="form-group">
        <label htmlFor="theme" className="form-label">Theme</label>
        <select
          id="theme"
          className="input-field"
          value={settings.appearance.theme}
          onChange={(e) => handleInputChange('appearance', 'theme', e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="fontSize" className="form-label">Font Size</label>
        <select
          id="fontSize"
          className="input-field"
          value={settings.appearance.fontSize}
          onChange={(e) => handleInputChange('appearance', 'fontSize', e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">Extra Large</option>
        </select>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Accessibility</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Reduce Motion</h4>
            <p className="text-sm text-gray-500">Minimize animations and transitions</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.appearance.reduceMotion ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.appearance.reduceMotion}
            aria-labelledby="reduce-motion-label"
            onClick={() => handleInputChange('appearance', 'reduceMotion', !settings.appearance.reduceMotion)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.appearance.reduceMotion ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">High Contrast</h4>
            <p className="text-sm text-gray-500">Increase contrast for better visibility</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.appearance.highContrast ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.appearance.highContrast}
            aria-labelledby="high-contrast-label"
            onClick={() => handleInputChange('appearance', 'highContrast', !settings.appearance.highContrast)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.appearance.highContrast ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Enable 2FA</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.security.twoFactorEnabled ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.security.twoFactorEnabled}
            aria-labelledby="two-factor-label"
            onClick={() => handleInputChange('security', 'twoFactorEnabled', !settings.security.twoFactorEnabled)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.security.twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        {settings.security.twoFactorEnabled && (
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-700">
              Two-factor authentication is enabled. You will need to enter a verification code when signing in from a new device.
            </p>
            <div className="mt-3">
              <Link to="/profile" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Manage 2FA Settings
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Login Security</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Login Notifications</h4>
            <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
          </div>
          <button
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              settings.security.loginNotifications ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={settings.security.loginNotifications}
            aria-labelledby="login-notifications-label"
            onClick={() => handleInputChange('security', 'loginNotifications', !settings.security.loginNotifications)}
          >
            <span
              aria-hidden="true"
              className={`${
                settings.security.loginNotifications ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="sessionTimeout" className="form-label">Session Timeout (minutes)</label>
          <input
            type="number"
            id="sessionTimeout"
            className="input-field"
            min="5"
            max="120"
            value={settings.security.sessionTimeout}
            onChange={(e) => handleInputChange('security', 'sessionTimeout', parseInt(e.target.value))}
          />
          <p className="form-hint">Automatically log out after this period of inactivity.</p>
        </div>

        <div className="form-group">
          <label htmlFor="passwordExpiry" className="form-label">Password Expiry (days)</label>
          <input
            type="number"
            id="passwordExpiry"
            className="input-field"
            min="30"
            max="365"
            value={settings.security.passwordExpiry}
            onChange={(e) => handleInputChange('security', 'passwordExpiry', parseInt(e.target.value))}
          />
          <p className="form-hint">Number of days before you need to change your password.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Account Actions</h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="button" className="btn-secondary">
            Change Password
          </button>
          <button type="button" className="btn-secondary">
            View Login History
          </button>
          <button type="button" className="btn-danger">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'account':
        return renderAccountSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'security':
        return renderSecuritySettings();
      default:
        return renderAccountSettings();
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-description">
          Manage your account settings, privacy, notifications, and more.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => handleTabChange('account')}
                className={`${
                  activeTab === 'account'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'account' ? 'page' : undefined}
              >
                Account
              </button>
              <button
                onClick={() => handleTabChange('privacy')}
                className={`${
                  activeTab === 'privacy'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'privacy' ? 'page' : undefined}
              >
                Privacy
              </button>
              <button
                onClick={() => handleTabChange('notifications')}
                className={`${
                  activeTab === 'notifications'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'notifications' ? 'page' : undefined}
              >
                Notifications
              </button>
              <button
                onClick={() => handleTabChange('appearance')}
                className={`${
                  activeTab === 'appearance'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'appearance' ? 'page' : undefined}
              >
                Appearance
              </button>
              <button
                onClick={() => handleTabChange('security')}
                className={`${
                  activeTab === 'security'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'security' ? 'page' : undefined}
              >
                Security
              </button>
            </nav>
          </div>
        </div>
        <div className="card-body">
          {renderActiveTab()}
          
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="btn-primary"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                'Save Changes'
              )}
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleReset}
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 