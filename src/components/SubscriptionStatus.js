import React from 'react';

const SubscriptionStatus = ({ userSubscription, onManageSubscription }) => {
  if (!userSubscription) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'var(--success)';
      case 'canceled': return 'var(--danger)';
      case 'past_due': return 'var(--accent)';
      default: return 'var(--gray)';
    }
  };

  const getPlanName = (planId) => {
    switch (planId) {
      case 1: return 'Basic';
      case 2: return 'Pro';
      default: return 'Unbekannt';
    }
  };

  return (
    <div className="subscription-status">
      <div className="status-card">
        <div className="status-header">
          <h3>Dein Abonnement</h3>
          <span 
            className="status-badge"
            style={{ backgroundColor: getStatusColor(userSubscription.status) }}
          >
            {userSubscription.status}
          </span>
        </div>
        
        <div className="status-details">
          <div className="detail-item">
            <span className="label">Plan:</span>
            <span className="value">{getPlanName(userSubscription.plan_id)}</span>
          </div>
          
          {userSubscription.current_period_end && (
            <div className="detail-item">
              <span className="label">Läuft ab:</span>
              <span className="value">
                {new Date(userSubscription.current_period_end).toLocaleDateString('de-DE')}
              </span>
            </div>
          )}
          
          {userSubscription.stripe_subscription_id && (
            <div className="detail-item">
              <button 
                className="btn btn-outline btn-small"
                onClick={onManageSubscription}
              >
                Abonnement verwalten
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStatus;