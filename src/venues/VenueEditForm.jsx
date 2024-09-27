import { VenueForm } from "./VenueForm";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const useUpdateVenue = (id) => {
  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper(`holidaze/venues/${id}`, { method: "PUT", body: data }),
  });
};

export function VenueEditForm({ venue }) {
  const navigate = useNavigate();
  const { mutate, isPending } = useUpdateVenue(venue.id);

  const handleVenueUpdate = async (data) =>
    mutate(data, {
      onSuccess: (data) => {
        toast.success("Venue successfully edited!");
        navigate(`/venue/${data?.data?.id}`);
      },
      onError: () => {
        toast.error("An error occurred. Could not update venue");
      },
    });

  return (
    <div>
      <Helmet>
        <title>Edit venue - Holidaze</title>
      </Helmet>
      <VenueForm
        venue={venue}
        onSubmit={handleVenueUpdate}
        submitText="Update Venue"
        onCancel={() => navigate("/")}
        isLoading={isPending}
        headerText="Edit Venue"
      />
    </div>
  );
}
