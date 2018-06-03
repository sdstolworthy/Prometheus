import React from "react"
import { propsToHelperClasses } from "../../helpers/componentHelpers";

const Modal = ({ children, onClose, ...props }) => (
  <div className={`modal ${propsToHelperClasses(props)}`} {...props}>
    <div className="modal-background" onClick={onClose}/>
    <div className="modal-content">{children}</div>
    <button className="modal-close is-large" aria-label="close" onClick={onClose} />
  </div>
)

export default Modal