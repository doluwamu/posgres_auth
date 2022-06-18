import teamMemberQuery from "../queries/teamMemberQueries.js";

export const addTeamMember = async (req, res) => {
  try {
    const { name, position } = req.body;

    if (!name || name.length < 1 || !position || position.length < 1)
      return res.status(400).send({
        message: `Please provide a ${
          !name ? "name" : "position"
        } for this team member`,
      });
    // if(!position || position.length < 1) return res.status(400).send({message: 'Please provide a position for this team member'})

    const newTeamMember = await new teamMemberQuery(
      name,
      position,
    ).createTeamMember();

    if (!newTeamMember)
      return res.status(400).send({
        message: "Something went wrong while trying to add this member",
      });

    return res.status(201).json({ message: "team member successfully added" });
  } catch (error) {
    return res.status(422).send({ message: error.message });
  }
};

export const getTeamMembers = async (req, res) => {
  try {
    const members = await new teamMemberQuery().listTeamMembers();

    if (!members)
      return res.status(422).send({ message: "Trouble listing members" });

    return res.json(members.rows);
  } catch (error) {
    return res.status(422).send({ message: error.message });
  }
};
