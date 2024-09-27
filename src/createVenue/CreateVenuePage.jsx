// CreateVenuePage.jsx
import React from "react";
import { VenueForm } from "../venues/VenueForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import toast from "react-hot-toast";

const useCreateVenue = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper("holidaze/venues", { method: "POST", body: data }),
  });
};

export function CreateVenuePage() {
  const { mutate, isPending } = useCreateVenue();
  const navigate = useNavigate();

  const handleVenueSubmit = async (data) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success("Venue created");
        navigate(`/venue/${data?.data?.id}`);
      },
      onError: () => {
        toast.error("An error occurred. Could not create venue");
      },
    });
  };

  return (
    <VenueForm
      onSubmit={handleVenueSubmit}
      onCancel={() => navigate("/")}
      isLoading={isPending}
      submitText={"Create venue"}
      headerText={"Create venue"}
    />
  );
}
