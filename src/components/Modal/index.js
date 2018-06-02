import React from "react"
import { propsToHelperClasses } from "../../helpers/componentHelpers";

const Modal = ({ children, onClose, ...props }) => (
  <div class={`modal ${propsToHelperClasses(props)}`} {...props}>
    <div class="modal-background" onClick={onClose}/>
    <div class="modal-content">{children}</div>
    <button class="modal-close is-large" aria-label="close" onClick={onClose} />
  </div>
)

export default Modal