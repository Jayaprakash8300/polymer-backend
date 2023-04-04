const mongoose = require("mongoose");

const Projectmodel = new mongoose.Schema({
  repository: {
    type: String,
    required: true
  },
  contributors_url: {
    type: String,
    required: true
  },
  owner_avatar_url: {
    type: String,
    required: true
  },
  aws_verified: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  search_keyword: {
    type: String,
    required: true
  },
  last_updated: {
    type: String,
    required: true
  },
  repository_type: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  repository_link: {
    type: String,
    required: true
  },
  git_url: {
    type: String,
    required: true
  },
  data_refresh_time: {
    type: String,
    required: true
  },
  metadata_url: {
    type: String,
    required: true
  },
  service_name: {
    type: String,
    required: true
  },
  node_id: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  language_url: {
    type: String,
    required: true
  },
  owner_id: {
    type: String,
    required: true
  },
  owner_type: {
    type: String,
    required: true
  },
  has_wiki: {
    type: String,
    required: true
  },
  is_fork: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  license_name: {
    type: String,
    required: true
  },
  topics: {
    type: String,
    required: true
  },
  commits: {
    type: String,
    required: true
  },
  contributors: {
    type: String,
    required: true
  },
  open_issues: {
    type: String,
    required: true
  },
  last_updated: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  stars: {
    type: String,
    required: true
  },
  forks: {
    type: String,
    required: true
  },
  watchers: {
    type: String,
    required: true
  }
});

const projectmodel = mongoose.model("projects", Projectmodel);
module.exports = projectmodel;
