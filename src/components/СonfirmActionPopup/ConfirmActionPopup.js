import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function ConfirmActionPopup({
  isOpen,
  onClose,
  card,
  onConfirmAction,
  onShowSpinner,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirmAction(card);
    onShowSpinner(true);
  }

  useEffect(() => {
    return onShowSpinner(false);
  });

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      submitButtonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
