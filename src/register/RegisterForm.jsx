//  RegisterForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

export function RegisterForm({ onSubmit }) {
  // handleSubmit receives the form data if validation is succs.
  // register registers input by creating a ref
  const { register, handleSubmit } = useForm();

  return (
    <div className="form-container">
      <div className="form-wrapper">
        {/* 'handleSubmit' validates the form fields. 
      If validation passes, it will call the 'onSubmit' function with the form data.*/}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username  */}
          <label htmlFor="name">Username</label>
          <input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          {/* Email  */}
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 100,
            })}
          />
          {/* Bio */}
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            {...register("bio", {
              maxLength: 150,
            })}
            placeholder="Tell us about yourself"
          />
          {/* Avatar Url  */}
          <label htmlFor="avatarUrl">Avatar URL</label>
          <input id="avatarUrl" type="url" {...register("avatar.url")} />
          {/* Avatar alt text */}
          <label htmlFor="avatarAlt">Avatar alt text</label>
          <input
            id="avatarAlt"
            type="text"
            {...register("avatar.alt", {
              maxLength: 100,
            })}
            placeholder="Avatar description"
          />
          {/* Banner URL */}
          <label htmlFor="bannerUrl">Banner URL</label>
          <input id="bannerUrl" type="url" {...register("banner.url")} />
          {/* Banner alt text */}
          <label htmlFor="bannerAlt">Banner alt text</label>
          <input
            id="bannerAlt"
            type="text"
            {...register("banner.alt", {
              maxLength: 100,
            })}
            placeholder="Banne image description"
          />
          {/* Venue manager */}
          <label htmlFor="venueManager">Venue manager? Check box.</label>
          <input
            id="venueManager"
            type="checkbox"
            {...register("venueManager")}
          />{" "}
          {/* Button  */}
          <button className="formSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
