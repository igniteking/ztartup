import { defineQuery } from "next-sanity";

export const startupsQuery =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
    _id, title, description, slug, _createdAt, author -> {_id, name, image, bio}, views, category, image}`);
