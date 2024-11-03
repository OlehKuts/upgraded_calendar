export const RemoveModal = ({ onClose, onRemove, patientName }) => {
  return (
    <div className="remove_modal">
      <h3>
        Ви дійсно хочете видалити пацієнта{" "}
        <span style={{ color: "coral" }}>{patientName}</span> з календаря?
      </h3>
      <div>
        <button onClick={onRemove} className="rejectBtn">
          Видалити
        </button>
        <button onClick={onClose}>Відміна</button>
      </div>
    </div>
  );
};
