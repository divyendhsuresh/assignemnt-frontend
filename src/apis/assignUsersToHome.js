import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const assignUsersToHome = ({ street_address, userIds }) => {
    return axios.post("http://localhost:3000/home/assign-users-to-home", {
        street_address,
        userIds,
    }).then(response => response.data);
};

export const useAssignUsersToHome = () => {
    return useMutation(assignUsersToHome);
};
