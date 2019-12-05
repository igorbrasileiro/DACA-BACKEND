import { DataTypes, Model, BuildOptions } from 'sequelize';

export interface LawProject extends Model {
  id: Number;
  depute: String;
  menu: String;
  code: String;
  conclusive: String;
  url: String;
  interest: String;
  situation: String;
  year: String;
  currentLocal: String;
  historic: String;
}

export type LawProjectModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): LawProject;
};

export const LawProjectSequelize = {
  code: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Code',
      },
      notNull: {
        args: true,
        msg: 'Not Null Code',
      },
    },
  },
  conclusive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  currentLocal: {
    defaultValue: 'ccjc',
    type: DataTypes.STRING,
  },
  depute: {
    allowNull: false,
    type: new DataTypes.STRING(128),
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Depute',
      },
      notNull: {
        args: true,
        msg: 'Not Null Depute',
      },
    },
  },
  historic: {
    type: DataTypes.STRING,
  },
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },

  interest: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Interest',
      },
      notNull: {
        args: true,
        msg: 'Not Null Interest',
      },
    },
  },
  menu: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not Empty Menu',
      },
      notNull: {
        args: true,
        msg: 'Not Null Menu',
      },
    },
  },
  situation: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

};
