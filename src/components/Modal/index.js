import React from "react"
import { propsToHelperClasses } from "../../helpers/componentHelpers";

const Modal = ({ children, ...props }) => (
  <div class={`modal ${propsToHelperClasses(props)}`} {...props}>
    <div class="modal-background" />
    <div class="modal-content">{children}</div>
    <button class="modal-close is-large" aria-label="close" />
  </div>
)

export default Modal