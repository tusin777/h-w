import React from 'react';
import './UserBadge.css';

/**
 * UserBadge — компонент бейджа пользователя.
 * @param {{name: string, profession: string, city: string}} props
 */
export function UserBadge({ name, profession, city }) {
  return (
    <div className="user-badge">
      <h2>{name}</h2>
      <p>{profession}</p>
      <p>{city}</p>
      {/* TODO: Добавьте описание или хобби пользователя */}
    </div>
  );
}
