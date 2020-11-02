import React from 'react';
import PriceBox from '../PriceBox';
import style from './app.module.scss';

const boxesMockData = [
    {
        level: 'Free',
        buttonText: 'Try For Free',
        featuresList: [
            'Access to 10,000 of the team’s most recent message',
            '10 integrations with other apps like Google Drive, Office 365, and more',
            '1:1 voice and video calls between teammates',
            'Screen-sharing and file-sharing'
        ]
    },
    {
        level: 'Standard',
        buttonText: 'View Plan',
        featuresList: [
            'All features of free plan',
            'Unlimited message archive',
            'Unlimited apps and integrations',
            'Group video calls up to 15 users',
            'Work Securely with other organisations with Slack Connect',
            'OAuth with Google',
            'Two-factor authentication settings',
            'Customer retention policies for message and files',
            'Custom user groups for different teams and departments',
            'Manage channel posting permissions for #general channel only',
            'Channel recommendations',
            'Priority support'
        ]
    },
    {
        level: 'Plus',
        buttonText: 'View Plan',
        featuresList: [
            'All features of Standard Plan',
            'Corporate exports of messages',
            'Choice of region for data residency',
            'User provisioning and deprovisionings',
            'Real-time Active Directory sync with OneLogin, Okta and Ping',
            '24/7 support with 4-hour first response time',
            '99.99% guaranteed uptime SLA',
            'SAML-based single sign-in (SSO)',
        ]
    }
]

function App() {
  return (
    <div className={style.App}>
      <div className={style.BoxWrapper}>
          {
              boxesMockData.map(box => <PriceBox
                  key={box.level}
                  level={box.level}
                  buttonText={box.buttonText}
                  featuresList={box.featuresList}
              />)
          }
      </div>
    </div>
  );
}

export default App;
