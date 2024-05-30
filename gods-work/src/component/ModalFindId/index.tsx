import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

const ModalFindId = ({ show, onHide }) => {
  const handleClickNext = () => {
    alert("아이디");
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            아이디 찾기
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>계정 생성에 사용한 Email 입력</Form.Label>
              <Form.Control
                type="email"
                placeholder="email 주소 입력"
                // value={}
              />
            </Form.Group>

            <Button
              variant="info"
              type="button"
              className="my-3"
              onClick={handleClickNext}
            >
              다음
            </Button>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default ModalFindId;
