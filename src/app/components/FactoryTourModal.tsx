'use client'

import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: #2B1B58;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`

const Title = styled.h2`
  color: #2B1B58;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border: none;
  background: #faf7f2;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`

const Select = styled.select`
  padding: 0.75rem;
  border: none;
  background: #faf7f2;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`

const CheckboxContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-top: 1rem;
`

const Checkbox = styled.input`
  margin-top: 0.25rem;
`

const CheckboxLabel = styled.label`
  color: #2B1B58;
  font-size: 0.9rem;
  line-height: 1.4;
`

const Link = styled.a`
  color: #2B1B58;
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background-color: #C19A5B;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 1rem;

  &:hover {
    background-color: #A88347;
  }
`

interface FactoryTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FactoryTourModal = ({ isOpen, onClose }: FactoryTourModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Book A Factory Tour</Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Name of Organisation" />
          <Input placeholder="Name of Contact Person" />
          <Input placeholder="Organization Address" />
          <Input placeholder="Organization's Resident Town" />
          <Input placeholder="Contact Person's Telephone" />
          <Input placeholder="Contact Person's E-mail" />
          <Input type="date" placeholder="Date of Visit" />
          <Select>
            <option value="">Number of participants</option>
            <option value="10-20">10-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41+">41+</option>
          </Select>
          <Select>
            <option value="">Age Range Of Participants</option>
            <option value="5-12">5-12 years</option>
            <option value="13-18">13-18 years</option>
            <option value="19+">19+ years</option>
          </Select>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" />
            <CheckboxLabel htmlFor="terms">
              Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.
            </CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="safety" />
            <CheckboxLabel htmlFor="safety">
              Have Read The Safety Regulations
            </CheckboxLabel>
          </CheckboxContainer>
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#2B1B58' }}>
            Plant Visit <Link href="#">Terms & Conditions</Link> &nbsp;&nbsp;&nbsp; Plant Visit <Link href="#">Safety Regulations</Link>
          </div>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  )
}

export default FactoryTourModal 