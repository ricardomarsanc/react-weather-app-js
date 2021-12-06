import React, { useMemo } from 'react'
import Welcome from '../components/Welcome'
import { Grid, Typography, Link } from '@mui/material'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter} from 'react-router-dom'

const WelcomePage = () => {
    const iconContextSize = useMemo(() => ({ size: '6em' }), [])
    return (
        <Welcome>
            <Grid container className="full" 
            direction="column" justifyContent="center">
                <div className="highlight">
                    <Grid item container xs={12} justifyContent="center"
                    alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={ iconContextSize }>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column"
                        justifyContent="center" alignItems="center">
                            <Typography variant="h4">
                                Weather App
                            </Typography>
                            <Link aria-label="menu"
                            component={ LinkRouter }
                            to="/main">
                                Ingresar
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Welcome>
    )
}

export default WelcomePage
