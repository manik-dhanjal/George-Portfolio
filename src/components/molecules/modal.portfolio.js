import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'




const ModalPortfolio = ({open,setOpen}) => {
    return (
             <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            >
            <Modal.Header>Modal Header</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />
                <Modal.Description>
                <p>
                    This is an example of expanded content that will cause the modal's
                    dimmer to scroll.
                </p>

                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button primary onClick={() => setOpen(false)}>
                Proceed <Icon name='right chevron' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalPortfolio
