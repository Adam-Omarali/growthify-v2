import { Button, TextInput } from "@mantine/core";
import { closeAllModals, openConfirmModal } from "@mantine/modals";

interface openModalProps{
    title: String
    FormInput: JSX.Element
}

export const OpenModal = ({title, FormInput}:openModalProps) => openConfirmModal({
    title: title,
    children: (
      <div style={{zIndex: "500"}}>
        {FormInput}
      </div>
    ),
});