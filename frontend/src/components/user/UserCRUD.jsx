import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Lista, Alterar e Excluir.'
}

export default class UserCRUD extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}