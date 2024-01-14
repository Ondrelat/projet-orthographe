import React, { useState } from 'react';
import Modal from './Modal';

const LoginForm = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openCreateAccountModal = () => {
        closeLoginModal();
        setIsCreateAccountModalOpen(true);
    };
    const closeCreateAccountModal = () => setIsCreateAccountModalOpen(false);

    return (
        <div>
            <button onClick={openLoginModal}>Connexion</button>
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <form>
                    {/* Vos champs de formulaire de connexion */}
                    <button type="button" onClick={openCreateAccountModal}>
                        Créer un compte
                    </button>
                </form>
            </Modal>
            <Modal isOpen={isCreateAccountModalOpen} onClose={closeCreateAccountModal}>
                <form>
                    {/* Vos champs de formulaire de création de compte */}
                </form>
            </Modal>
        </div>
    );
};

export default LoginForm;