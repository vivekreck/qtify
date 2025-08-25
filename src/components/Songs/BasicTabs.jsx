import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabsData }) {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const updatedTabs = [
    {
      key: "all",
      label: "All",
    },
    ...tabsData,
  ];

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => {
        setLoading(false);
        setData(response?.data || []);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          TabIndicatorProps={{
            style: { backgroundColor: "green" },
          }}
        >
          {updatedTabs?.map((tab) => (
            <Tab key={tab?.key} label={tab.label} component="button" />
          ))}
        </Tabs>
      </Box>
      {updatedTabs?.map((tab, index) => {
        const updatedData =
          tab?.key === "all"
            ? data
            : data?.filter((song) => {
                if (song?.genre?.key === tab?.key) return true;
                return false;
              });
        return (
          <CustomTabPanel key={tab.key} value={value} index={index} {...a11yProps(index)}>
            {loading && <p style={{ color: "white" }}>Loading...</p>}
            {!loading && (
              <Carousel
                key={tab.key}
                items={updatedData}
                renderItem={(item) => <Card item={item} />}
                uniqueId={tab.key.replace(/\s+/g, "-")}
              />
            )}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
