import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function СonfirmActionPopup({
  isOpen,
  onClose,
  onСonfirmAction,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onСonfirmAction();
  }

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
