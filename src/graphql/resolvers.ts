import { merge } from 'lodash';
import { resolvers as userResolvers } from './resources/person/person.resolvers';
import { resolvers as partyResolvers } from './resources/party/party.resolvers';
import { resolvers as deputeResolvers } from './resources/depute/depute.resolvers';
import { resolvers as lawProjectResolvers } from './resources/lawProject/lawProject.resolvers';
import { resolvers as CommissionResolvers } from './resources/commission/commission.resolvers';

const resolvers = merge(
  userResolvers,
  partyResolvers,
  CommissionResolvers,
  deputeResolvers,
  lawProjectResolvers,
);

export default resolvers;
