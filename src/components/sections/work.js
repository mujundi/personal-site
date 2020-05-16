import React, { useState, useEffect } from "react"
import window from "global"
import PropTypes from "prop-types"
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import styles from "./work.module.scss"
import Job from "../job"
import jobs from "../../content/jobs"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#b794de",
    },
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#111",
    minHeight: 400,
  },
  tabs: {
    borderBottom: `1px solid #444`,
    borderRight: "none",
  },
}))

export default function Work() {
  const [value, setValue] = React.useState(0)

  const [isDesktop, setDesktop] = useState(
    window.innerWidth > 750 ? "vertical" : "horizontal"
  )
  const updateMedia = () => {
    setDesktop(window.innerWidth > 750 ? "vertical" : "horizontal")
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const classes = useStyles()
  const orientation = isDesktop
  const defaultOrientation = window.innerWidth > 750 ? "vertical" : "horizontal"

  return (
    <div id="work" className={styles.work}>
      <h2>Work</h2>
      <div className={classes.root + ` ${styles.workbox}`}>
        <ThemeProvider theme={theme}>
          <Tabs
            id="tabs"
            orientation="horizontal"
            variant="standard"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            aria-label="tabs"
            className={classes.tabs + ` ${styles.worktabs}`}
          >
            <Tab className={styles.tab} label="Freelance" {...a11yProps(1)} />
            <Tab className={styles.tab} label="Boucher Lab" {...a11yProps(0)} />
            <Tab className={styles.tab} label="Reynolds" {...a11yProps(2)} />
            <Tab className={styles.tab} label="Kumar Lab" {...a11yProps(3)} />
            <Tab className={styles.tab} label="UF E.E.D." {...a11yProps(3)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Job
              title={jobs.freelance.title}
              location={jobs.freelance.location}
              subject={jobs.freelance.subject}
              start={jobs.freelance.start}
              end={jobs.freelance.end}
              duties={jobs.freelance.duties}
              techs={jobs.freelance.techs}
            />
          </TabPanel>
          <TabPanel className={styles.jobpanel} value={value} index={1}>
            <Job
              title={jobs.boucher.title}
              location={jobs.boucher.location}
              subject={jobs.boucher.subject}
              start={jobs.boucher.start}
              end={jobs.boucher.end}
              duties={jobs.boucher.duties}
              techs={jobs.boucher.techs}
              pub={jobs.boucher.pub}
              publink={jobs.boucher.publink}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Job
              title={jobs.reynolds.title}
              location={jobs.reynolds.location}
              subject={jobs.reynolds.subject}
              start={jobs.reynolds.start}
              end={jobs.reynolds.end}
              duties={jobs.reynolds.duties}
              techs={jobs.reynolds.techs}
              pub={jobs.reynolds.pub}
              publink={jobs.reynolds.publink}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Job
              title={jobs.kumar.title}
              location={jobs.kumar.location}
              subject={jobs.kumar.subject}
              start={jobs.kumar.start}
              end={jobs.kumar.end}
              duties={jobs.kumar.duties}
              techs={jobs.kumar.techs}
              pub={jobs.kumar.pub}
              publink={jobs.kumar.publink}
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Job
              title={jobs.ta.title}
              location={jobs.ta.location}
              subject={jobs.ta.subject}
              start={jobs.ta.start}
              end={jobs.ta.end}
              duties={jobs.ta.duties}
              techs={jobs.ta.techs}
              syllabus={jobs.ta.syllabus}
            />
          </TabPanel>
        </ThemeProvider>
      </div>
      <hr />
    </div>
  )
}
