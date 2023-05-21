import React, { Component } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const baseUrl = 'http://localhost:3333/properties'

const initialState = {
    propertie: {
        _id: '',
        type: '',
        title: '',
        description: ''
    },
    properties: []
}

export default class Properties extends Component {

    /* Define estado inicial*/
    constructor(props) {
        super(props)
        this.state = { ...initialState }
    }
    
    /* Limpa formulário */
    clear(){
        this.setState({ propertie : initialState.propertie })
    }

    /* Cria Imóvel */
    save(){
        const propertie = this.state.propertie
        const method  = propertie._id? 'put' : 'post'
        const url = propertie._id? `${baseUrl}/${propertie._id }` : `${baseUrl}`
        axios[method](url, propertie)
            .then(response => {
                const list = this.getUpdatedList(response.data)
                this.setState({ propertie: initialState.propertie, list })
            })
            .catch((error) => {
                console.log(error)
            })
            
    }


    /* Atualiza Imóvel */
    update(event) {
        const propertie = { ...this.state.propertie }
        propertie[event.target.name] = event.target.value
        this.setState({ propertie })
    }



    componentDidMount(){
        axios.get(baseUrl)
            .then(response => {
                this.setState({ list: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    /* Atualiza lista de imóveis */
    getUpdatedList(propertie){
        const list = this.state.list.filter(p => p._id !== propertie._id)
        if(propertie) list.unshift(propertie)
        return list
    }

    /* Lista Imóveis */
    mapProperties(properties){
        return this.state.list?.map(response  => {
            return this.getListItem(response)
        })
    }

    renderProperties(){
        const properties = this.state.list
        return ( <List>{ this.mapProperties(properties) }</List>)
    }

    getListItem(response){
        return (
             <ListItem  
                alignItems="flex-start"
                key={response._id}>
                    <ListItemAvatar>
                        <Avatar alt="Foto" src="https://picsum.photos/200/300?random=1" />
                    </ListItemAvatar>
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <Tooltip title={ response.type }>
                                <h3>{response.title}</h3> 
                            </Tooltip>
                            <p>{response.description}</p>
                        </Typography>
                    </React.Fragment>
                    <Divider variant="inset" component="li" />
                    <div className='actions'>
                        <IconButton
                            className='btn-edit'
                            onClick={ () => this.load(response)}
                            color='success'>
                            <EditIcon />
                         </IconButton>
                        <IconButton
                            className='btn-delete'
                            onClick={ () => this.remove(response)}
                            color='error'
                            >
                             <DeleteIcon />
                        </IconButton>
                    </div>
            </ListItem>
        )
    }

    /* Carrega Imóvel */
    load(propertie) {
        this.setState({ propertie })
    }

    /* Remove Imóvel */
    remove(propertie) {
        axios.delete(`${baseUrl}/${propertie._id }`)
            .then(response => {
                const list = this.state.list.filter( p => p._id !== propertie._id )
                this.setState({ list })
            })
    }

    /* Renderiza formulário de cadastro */
    renderForm(){
        return( 
            <main>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    
                    <TextField 
                        required
                        label="Título do Anúncio"
                        type='text' 
                        name='title'
                        variant="outlined"
                        className='text'
                        value={this.state.propertie.title}
                        onChange={e => this.update(e) }
                    />

                    <TextField 
                        required
                        label="Tipo do Imóvel "
                        valiant="outlined" 
                        type='text' 
                        name='type'
                        className='text'
                        value={this.state.propertie.type}
                        onChange={e => this.update(e) }
                    />

                    <TextField 
                        label="Descrição do Imóvel "
                        valiant="outlined" 
                        type='text' 
                        name='description'
                        className='text'
                        value={this.state.propertie.description}
                        onChange={e => this.update(e) }
                    />

                    <Stack spacing={2} direction="row">
                        <Button variant="outlined"
                            onClick={ e => this.save(e)}
                            color='warning'>
                            Salvar
                        </Button>
                        <Button variant="text"
                            onClick={ e => this.clear(e)}
                            color='warning'>
                            Cancelar
                        </Button>
                    </Stack>  
                </Box>
            </main>
        )
    }

    /* Renderiza formulário e lista */
    render() {
        return( 
            <div className='content'>
                {this.renderForm()}
                {this.renderProperties()}
            </div>
            )
    }
}