import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IItem from 'interfaces/item';

import useStyles from './style';

interface IProps {
  open: boolean;
  handleClose: () => void;
  item: IItem;
}

const Details = ({ open, handleClose, item }: IProps) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onBackdropClick={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes.root}>
          <div className='header'>
            <div className='close' id='modal-default-close'>
              <IconButton onClick={() => (handleClose ? handleClose() : null)}>
                <Icon>X</Icon>
              </IconButton>
            </div>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Details
            </Typography>
          </div>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {item.name && <div>Name: {item.name}</div>}
            {item.title && <div>Title: {item.title}</div>}
            {item.gender && <div>Gender: {item.gender}</div>}
            {item.height && <div>Height: {item.height}</div>}
            {item.mass && <div>Mass: {item.mass}</div>}
            {item.planets && <div>Planets: {item.planets}</div>}
            {item.starships && <div>Starships: {item.starships}</div>}
            {!!item.species?.length && <div>Species: {item.species}</div>}
            {item.vehicles && <div>Vehicles: {item.vehicles}</div>}
            {item.model && <div>Model: {item.model}</div>}
            {item.length && <div>Length: {item.length}</div>}
            {item.homeworld && <div>Homeworld: {item.homeworld}</div>}
            {item.hair_color && <div>Hair color: {item.hair_color}</div>}
            {item.eye_color && <div>Eye color: {item.eye_color}</div>}
            {item.skin_color && <div>Skin color: {item.skin_color}</div>}
            {item.films && <div>Films: {item.films}</div>}
            {item.birth_year && <div>Birth year: {item.birth_year}</div>}
            {item.characters && <div>Characters: {item.characters}</div>}
            {item.episode_id && <div>Episode: {item.episode_id}</div>}
            {item.director && <div>Director: {item.director}</div>}
            {item.producer && <div>Producer: {item.producer}</div>}
            {item.starship_class && <div>Starship class: {item.starship_class}</div>}
            {item.manufacturer && <div>Manufacturer: {item.manufacturer}</div>}
            {item.crew && <div>Crew: {item.crew}</div>}
            {item.passengers && <div>Passengers: {item.passengers}</div>}
            {item.pilots && <div>Pilots: {item.pilots}</div>}
            {item.vehicle_class && <div>Vehicle class: {item.vehicle_class}</div>}
            {item.classification && <div>Classification: {item.classification}</div>}
            {item.designation && <div>Designation: {item.designation}</div>}
            {item.average_height && <div>Average height: {item.average_height}</div>}
            {item.average_lifespan && <div>Average lifespan: {item.average_lifespan}</div>}
            {item.eye_colors && <div>Eye colors: {item.eye_colors}</div>}
            {item.hair_colors && <div>Hair colors: {item.hair_colors}</div>}
            {item.skin_colors && <div>Skin colors: {item.skin_colors}</div>}
            {item.language && <div>Language: {item.language}</div>}
            {item.diameter && <div>Diameter: {item.diameter}</div>}
            {item.rotation_period && <div>Rotation period: {item.rotation_period}</div>}
            {item.orbital_period && <div>Orbital period: {item.orbital_period}</div>}
            {item.gravity && <div>Gravity: {item.gravity}</div>}
            {item.population && <div>Population: {item.population}</div>}
            {item.climate && <div>Climate: {item.climate}</div>}
            {item.terrain && <div>Terrain: {item.terrain}</div>}
            {item.residents && <div>Residents: {item.residents}</div>}
            {item.surface_water && <div>Surface water: {item.surface_water}</div>}
          </Typography>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
