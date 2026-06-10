import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDataRef = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDataRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Forgot to enter a value.</p>
        <p>Populate all fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-900">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} type="text" label="Title" />
          <Input ref={descriptionRef} label="Description" isTextArea />
          <Input ref={dueDataRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
