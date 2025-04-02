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

const Description = styled.p`
  color: #2B1B58;
  text-align: center;
  margin-bottom: 2rem;
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

  &:hover {
    background-color: #A88347;
  }
`

interface DonationRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationRequestModal = ({ isOpen, onClose }: DonationRequestModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Request Product Donations</Title>
        <Description>
          You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks&apos; notice to the date of your event
        </Description>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Name of Organisation" />
          <Input placeholder="Name of Contact Person" />
          <Input placeholder="Contact Person Position" />
          <Input placeholder="Organization Address" />
          <Input placeholder="Contact Person&apos;s Telephone" />
          <Input placeholder="Contact Person&apos;s E-mail" />
          <Input type="date" placeholder="Date of Event" />
          <Select>
            <option value="">Intended use of Donations</option>
            <option value="charity">Charity Event</option>
            <option value="fundraising">Fundraising</option>
            <option value="community">Community Event</option>
          </Select>
          <Select>
            <option value="">Number of Attendants</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="201+">201+</option>
          </Select>
          <Select>
            <option value="">What Product Are Specifically Looking For?</option>
            <option value="bread">Bread</option>
            <option value="buns">Buns</option>
            <option value="rolls">Rolls</option>
          </Select>
          <SubmitButton>Proceed to next step</SubmitButton>
        </Form>
        <p>We&apos;ll review your request and get back to you within 48 hours</p>
      </ModalContent>
    </ModalOverlay>
  )
}

export default DonationRequestModal 