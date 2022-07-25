import axios from 'axios'

let IP_DATA;

axios.get('http://localhost:2000/').then(data=> IP_DATA = data)

export default IP_DATA;







// const IP_DATA = [
//     {
//         ip_address: "192.168.10.10",
//         name: "Corp_DHCP_Svr",
//         subnet: "192.168.10.0 /24"
//     },
//     {
//         ip_address: "172.16.21.5",
//         name: "Corp_DNS_Svr",
//         subnet: "172.16.21.0 /24"
//     },
//     {
//         ip_address: "10.10.1.10",
//         name: "Corp_MongoDB",
//         subnet: "10.10.1.0 /24"
//     },
//     {
//         ip_address: "192.24.20.2",
//         name: "Corp_Jira",
//         subnet: "192.24.20.0 /24"
//     },
//     {
//         ip_address: "172.18.10.12",
//         name: "Corp_Helix",
//         subnet: "172.18.10.0 /24"
//     },
//     {
//         ip_address: "172.16.111.11",
//         name: "Corp_Github",
//         subnet: "172.16.111.1.0 /24"
//     }
// ];

// export default IP_DATA;