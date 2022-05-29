import { React, useState } from 'react'
import { Container } from 'react-bootstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {
  Modal,
  Button
} from 'react-bootstrap'  

function Booking() {
  const [steps, setSteps] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false
  })

 const showModal = () => {
      setSteps({
        stepOne: true,
        stepTwo: false,
        stepThree: false
      })
 }

 const showModalTwo = () => {
   closeModal()
    setSteps({
      stepOne: false,
      stepTwo: true,
      stepThree: false
    })
}

 const closeModal = () => {
    setSteps({
      stepOne: false,
      stepTwo: false,
      stepThree: false
    })
 }

  return (
    <Container>

      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={showModal}
      />
      
      /* Modal Design will be here! */
      // Steo One - Non-disclosure Agreement and Data Privacy
      <Modal size='lg' show={steps.stepOne} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>GGCAST Non-disclosure Agreement and Data Privacy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat ultrices 
          volutpat. Maecenas sed diam nunc. Duis pulvinar, erat in congue fermentum, 
          ante odio convallis magna, in congue nunc mi a odio. Morbi ut erat nisi. 
          Sed efficitur vehicula ipsum pellentesque vehicula. Maecenas massa justo, finibus 
          id urna non, varius dignissim eros. Suspendisse accumsan, justo nec blandit 
          pellentesque, diam lacus auctor nisi, et posuere arcu lectus vel justo.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat ultrices 
          volutpat. Maecenas sed diam nunc. Duis pulvinar, erat in congue fermentum, 
          ante odio convallis magna, in congue nunc mi a odio. Morbi ut erat nisi. 
          Sed efficitur vehicula ipsum pellentesque vehicula. Maecenas massa justo, finibus 
          id urna non, varius dignissim eros. Suspendisse accumsan, justo nec blandit 
          pellentesque, diam lacus auctor nisi, et posuere arcu lectus vel justo.
          </p>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant='success' onClick={showModalTwo}>I Understand and Agree!</Button>
        </Modal.Footer>
      </Modal>

      <Modal size='lg' show={steps.stepTwo} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>step two</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body> 
        <Modal.Footer>
          <Button variant='success'>Next</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Booking