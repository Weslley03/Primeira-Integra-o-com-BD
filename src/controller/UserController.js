import User from "../models/user.js";
import express from 'express'

async function getUsers(require, response) {
  const users = await User.find();
  return response.status(200).json(users);
}

async function createUser(require, response) {
  const user = require.body;
  const newUser = await User.create(user);
  return response.status(201).json(newUser);
}

async function deleteUser(require, response) {
    const id = require.params.id
    await User.findByIdAndDelete({ _id: id})
    return response.status(200).json({response: 'user delete'})
  }

export {getUsers, createUser, deleteUser} 
//assim eu exporto quantos eu quiser
//export defalt é quando vc vai esxportar apenas uma coisa

