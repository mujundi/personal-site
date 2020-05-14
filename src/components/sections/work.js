import React from "react"
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

const jobs = {
  boucher: {
    title: "Research Scientist",
    location: "Boucher Laboratory",
    subject: "Bioinformatics",
    start: "Aug. 2017",
    end: "Mar. 2020",
    duties: [
      "Write programs to produce simulated metagenomic data for various tools we were developing",
      "Work in both the high-performance computing remote cluster environment, and develop scripts to facilitate its use for other lab members",
      "Seek out and test competing SNP detection tools, including development of protocols and testing methodology for all of the programs",
    ],
    techs: ["Python", "Bash"],
  },
}

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
    display: "flexbox",
    height: 350,
  },
  tabs: {
    borderBottom: `1px solid #222`,
  },
}))

export default function Work() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div id="work" className={styles.work}>
      <h2>Work</h2>
      <div className={classes.root + ` ${styles.workbox}`}>
        <ThemeProvider theme={theme}>
          <Tabs
            orientation="horizontal"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            aria-label="Vertical tabs"
            className={classes.tabs + ` ${styles.worktabs}`}
          >
            <Tab className={styles.tab} label="Boucher Lab" {...a11yProps(0)} />
            <Tab className={styles.tab} label="Freelance" {...a11yProps(1)} />
            <Tab className={styles.tab} label="Kumar Lab" {...a11yProps(2)} />
            <Tab
              className={styles.tab}
              label="Reynolds Lab"
              {...a11yProps(3)}
            />
          </Tabs>
          <TabPanel className={styles.jobpanel} value={value} index={0}>
            <Job
              title={jobs.boucher.title}
              location={jobs.boucher.location}
              subject={jobs.boucher.subject}
              start={jobs.boucher.start}
              end={jobs.boucher.end}
              duties={jobs.boucher.duties}
              techs={jobs.boucher.techs}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </ThemeProvider>
      </div>
    </div>
  )
}
