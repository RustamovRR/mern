import React from 'react'
import { useStyles } from '../styles'
import { observer } from 'mobx-react'
import Card from '@material-ui/core/Card'
import { deleteUser } from '../globalState'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { useLocation, useHistory } from 'react-router-dom'
import CardActionArea from '@material-ui/core/CardActionArea'
 
function _UserInfo() {
	const classes = useStyles()
	const { goBack } = useHistory()
	const { state } = useLocation()

	const removeUser = () => {
		goBack()
		deleteUser(state.email)
	}

	return (
		<Card>
			<CardActionArea>
				<CardMedia
					className={classes.image}
					image={state.picture.large}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{`${state.name.title}. ${state.name.first} ${state.name.last}`}
					</Typography>
					<Typography variant="caption">
						{state.phone} | {state.email}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{state.location.street.number}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{state.location.street.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{state.location.city}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{state.location.state}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{state.location.country}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary" onClick={goBack}>
					Back
				</Button>
				<Button size="small" color="primary" onClick={removeUser}>
					Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export const UserInfo = observer(_UserInfo)