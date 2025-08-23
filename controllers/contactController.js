const Contact = require("../models/Contact");
const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(contacts);
});

// @desc Create new contacts
// @route POST /api/contacts/:id
// @access public
const createtContact = asyncHandler(async (req, res) => {
  const { firstname, lastname, participation } = req.body;
  if (!firstname || !lastname || !participation) {
    res.status(400);
    throw new Error("Todos campos são obrigatorios!");
  }
  const contact = await Contact.create({
    firstname,
    lastname,
    participation,
  });
  res.status(201).json(contact);
});

// @desc get id contacts
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contato falhou");
  }
  res.status(200).json(contact);
});

// @desc Put update contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contato falhou");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

// @desc Delete contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contato falhou");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Delete contatos por ${req.params.id}` });
});

module.exports = {
  getContacts,
  createtContact,
  getContact,
  updateContact,
  deleteContact,
};
