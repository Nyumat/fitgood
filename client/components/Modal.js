import { Input, Center, Modal, FormControl, Button } from "native-base"
import { useState } from "react"


export default function OptionModal({ navigation, showModal }) {
    const [showModalLocal, setshowModalLocal] = useState(showModal)
    return (
        <Center>
            <Button onPress={() => setshowModalLocal(true)}>Button</Button>
            <Modal isOpen={showModalLocal} onClose={() => setshowModalLocal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Contact Us</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setshowModalLocal(false)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setshowModalLocal(false)
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}
