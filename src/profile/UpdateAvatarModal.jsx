import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "white",
  boxShadow: 24,
  padding: 16,
  "@media (max-width: 600px)": {
    width: "90%",
    padding: 12,
  },
};

const useUpdateAvatar = (name) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper(`holidaze/profiles/${name}`, { method: "PUT", body: data }),
    onSuccess: () => queryClient.invalidateQueries(["user", name]),
  });
};

export function UpdateAvatarModal({ open, handleClose, user }) {
  const { mutate, isPending } = useUpdateAvatar(user.name);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { avatar: user.avatar.url ?? null },
  });

  const onSubmit = (data) => {
    mutate(
      {
        avatar: {
          url: data.avatar,
          alt: user.avatar.alt,
        },
      },
      {
        onSuccess: () => {
          toast.success("Avatar updated");
          handleClose();
        },
        onError: () => {
          toast.error("An error occurred. Could not update avatar");
        },
      }
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <Typography variant="h4">Update avatar</Typography>
            <TextField
              style={{ width: "100%" }}
              label="Avatar"
              error={!!errors.avatar}
              helperText={errors.avatar?.message}
              {...register("avatar", {
                validate: {
                  invalid: (value) => {
                    if (value && !URL.canParse(value)) {
                      return "Invalid URL";
                    }

                    return true;
                  },
                },
              })}
            />
            <div>
              <Button type="submit" variant="contained" disabled={isPending}>
                Update
              </Button>
              <Button type="button" onClick={handleClose} disabled={isPending}>
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </form>
    </Modal>
  );
}
