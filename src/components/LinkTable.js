import React from "react";
import { Table, Badge } from "evergreen-ui";

export const LinkTable = ({ profiles }) => (
  <Table>
    <Table.Head>
      <Table.SearchHeaderCell />
      <Table.TextHeaderCell>Latency</Table.TextHeaderCell>
      <Table.TextHeaderCell>Status</Table.TextHeaderCell>
    </Table.Head>
    <Table.Body height={240}>
      {profiles.map(profile => (
        <Table.Row
          key={profile.id}
          isSelectable
          onSelect={() => alert(profile.name)}
        >
          <Table.TextCell>{profile.name}</Table.TextCell>
          <Table.TextCell>{profile.latency}</Table.TextCell>
          <Table.TextCell isNumber>
            {profile.status === "200" ? (
              <Badge color="red">{profile.status}</Badge>
            ) : (
              <Badge color="red">{profile.status}</Badge>
            )}
          </Table.TextCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
